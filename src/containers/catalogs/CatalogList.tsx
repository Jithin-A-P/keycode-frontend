import { CardGrid } from '@components';
import { useGetCatalogsQuery } from '@services/api';

const CatalogList = () => {
  const { data: catalogsResponse } = useGetCatalogsQuery('');
  const catalogs = catalogsResponse?.data;

  return (
    <>
      <div className='text-xl font-semibold my-[14px] text-jaguar'>
        Catalogs
      </div>
      <div className='overflow-y-auto rounded-lg h-full'>
        {catalogs && <CardGrid data={catalogs} />}
      </div>
    </>
  );
};

export default CatalogList;
