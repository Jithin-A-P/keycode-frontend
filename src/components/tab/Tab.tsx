import { ITabProps } from './type';

const Tab = (props: ITabProps) => {
  const { tabs, activeTab, onSelectTab } = props;

  return (
    <div className='border-b-whisper border-b flex mb-4'>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`mr-6 h-12 items-center flex cursor-pointer ${
            tab.id === activeTab ? 'border-b-jaguar border-b-2' : ''
          }`}
          onClick={() => onSelectTab(tab.id)}
          role='presentation'
        >
          <span
            className={`${tab.id === activeTab ? 'text-jaguar' : 'text-nobel'}`}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tab;
