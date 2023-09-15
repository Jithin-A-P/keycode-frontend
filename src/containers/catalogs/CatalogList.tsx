import { CardGrid } from '@components';
import { useGetCatalogsQuery } from '@services/api';

const CatalogList = () => {
  const { data } = useGetCatalogsQuery('bulbasaur');
  return (
  <>
    <div className='text-xl font-semibold my-[14px] text-jaguar'>Catalogs</div>
    <div className='overflow-y-auto rounded-lg h-full'>
      <CardGrid />
    </div>
  </>
)};

export default CatalogList;
