import { DataTable } from '@components';
import { useAppDispatch } from '@store/store';

// import { useLazyGetUsersQuery } from './store/api';

const CampaignList = () => {
  const dispatch = useAppDispatch();

  // const navigate = useNavigate();

  const columns: any = [
    {
      title: 'Catalog Id',
      selector: (c) => c.id,
      needClipBoard: true,
      width: 30,
    },
    {
      title: 'Name',
      selector: () => 'Catalog Name',
    },
  ];


  return (
    <>
      <div className='text-xl font-semibold mb-[14px] text-jaguar'>Campaigns</div>
      <div
        className='overflow-y-auto rounded-lg'
        style={{ maxHeight: 'calc(100vh - 281px)' }}
      >
        <DataTable
          columns={columns}
          data={[]}
          isLoading={false}
          emptyRecordsMessage='No data found!'
        />
      </div>
    </>
  );
};

export default CampaignList;
