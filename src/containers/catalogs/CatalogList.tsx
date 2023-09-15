import { useGetPokemonByNameQuery } from '@services/api';

const CatalogList = () => {
  const { data } = useGetPokemonByNameQuery('bulbasaur');
  return (
  <>
    <div className='text-xl font-semibold my-[14px] text-jaguar'>Catalogs</div>
    <div className='overflow-y-auto rounded-lg h-full'>
      List
    </div>
  </>
)};

export default CatalogList;
