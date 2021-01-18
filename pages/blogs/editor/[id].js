import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';
import { useGetBlog, useUpdateBlog } from 'actions/blogs';
import { useRouter } from 'next/router';

const BlogUpdateEditor = ({user, loading}) => {
  const router = useRouter();
  const { data } = useGetBlog(router.query.id);
  const[updateBlog, {data : updatedBlog, error, loading : isBlogLoading}] = useUpdateBlog();

  const _updatedBlog = async(data) => {
    await updateBlog(router.query.id, data);
    toast.success("Blog updated!");
  }
  if(error){
    toast.error(error);
  }
  // debugger
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        {data && data.content && (
          <Editor
            header="Update Your Blog..."
            initialContent={data.content}
            onSave={_updatedBlog}
            loading={isBlogLoading}
          />
        )}
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(BlogUpdateEditor)('admin');
