import { useEffect, useState } from 'react';

import { DownArrow } from '@icons';

import Clipboard from '../clipboard/Clipboard';
import Button from '../button/Button';
import EmptyData from '../empty-data/EmptyData';

import TableSkeletonLoader from './table-skeleton-loader/TableSkeletonLoader';
import { DataTableComponent, IAction } from './types';

const DataTable: DataTableComponent = (props) => {
  const {
    columns,
    data,
    handleRowActions,
    isLoading,
    emptyRecordsMessage = 'No records found!',
  } = props;
  const [activeAddOnRows, setActiveAddOnRows] = useState({});

  useEffect(() => setActiveAddOnRows({}), [data]);

  const header = columns.map((column) => (
    <th
      key={column.title}
      className='text-jaguar overflow-hidden h-14 pl-4
        pr-2 font-bold bg-white'
    >
      <div>{column.title}</div>
    </th>
  ));

  const renderActionsRow = (row, actions: IAction[]) => (
    <td
      className='w-full flex p-3'
      role='presentation'
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {actions.map((actionItem: IAction) => {
        const { id, action, icon: Icon } = actionItem;
        return (
          <div
            key={id}
            className='hover:bg-gray-200 rounded-[50%] p-2'
            title={action}
          >
            <Icon
              className='w-5 h-5 cursor-pointer'
              onClick={() => handleRowActions(row, action)}
            />
          </div>
        );
      })}
    </td>
  );

  const renderIconCell = (Icon, key) => (
    <td className='pl-8 pr-2' key={key}>
      {typeof Icon === 'string' ? Icon : <Icon />}
    </td>
  );

  const renderAddonRow = ({ column, isAddOnRowActive, toggleAddon }) => (
    <td key={column.title} role='presentation' onClick={toggleAddon}>
      <Button className='text-jaguar h-6 px-4 min-w-max'>
        <div className='flex items-center'>
          {isAddOnRowActive ? column.showLessText : column.showMoreText}
          <DownArrow
            className={`w-4 h-4 mx-2 fill-current transition-all ${
              isAddOnRowActive ? 'rotate-180' : ''
            }`}
          />
        </div>
      </Button>
    </td>
  );

  // Calculate rows
  const rows = (data ?? []).map((row, index) => {
    const isAddOnRowActive: boolean = activeAddOnRows[index];
    let addOnRowData;
    const cells = columns.map((column) => {
      if (column.actions) return renderActionsRow(row, column.actions);
      const value = column.selector(row);
      if (column.showIcon) return renderIconCell(value, column.title);
      const width = column.width ? `${column.width}%` : '';

      const handleColumnClick = () => {
        if (column.onClick) column.onClick(row, column);
      };

      if (column.type === 'addOnRow') {
        addOnRowData = column.selector(row);
        const activeAddOnRowsCopy = { ...activeAddOnRows };
        activeAddOnRowsCopy[index] = !activeAddOnRowsCopy[index];
        const toggleAddon = () => {
          setActiveAddOnRows(activeAddOnRowsCopy);
          if (index === data.length - 1)
            setTimeout(() => {
              const element = document.getElementById('table-wrapper');
              element.scrollTo(0, element.scrollHeight);
            });
        };
        return renderAddonRow({ column, toggleAddon, isAddOnRowActive });
      }

      return (
        <td
          className='group px-4 h-14 text-left'
          key={column.title}
          role='presentation'
          onClick={handleColumnClick}
          style={{ width }}
        >
          <div className='flex items-center gap-6'>
            <div
              className={`${
                column.isLink
                  ? 'text-blue-600 group-hover:underline cursor-pointer'
                  : ''
              } ${column.className}`}
            >
              {value}
            </div>
            {column.needClipBoard && (
              <div className='invisible group-hover:visible h-10 w-10 flex justify-center items-center'>
                <Clipboard value={value as string} />
              </div>
            )}
          </div>
        </td>
      );
    });

    return {
      element: (
        <>
          <tr
            className={`bg-snow ${
              isAddOnRowActive ? '' : 'border-y-[1px]'
            } border-[#EBEBEB] hover:bg-[#F2F2F2] first:rounded-lg border-t-0 last:border-y-0`}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            {cells}
          </tr>
          {isAddOnRowActive && (
            <tr className='bg-snow border-b-2'>
              <td colSpan={columns.length}>
                <div className={`${isAddOnRowActive ? 'min-h-full' : 'h-0'}`}>
                  {addOnRowData}
                </div>
              </td>
            </tr>
          )}
        </>
      ),
      visible: true,
    };
  });

  if (isLoading)
    return (
      <TableSkeletonLoader rowHeight='4.8rem' rows={8} cols={columns.length} />
    );

  if (data?.length === 0)
    return <EmptyData emptyRecordsMessage={emptyRecordsMessage} />;

  return (
    <table className='w-full text-sm text-jaguar'>
      <thead className='sticky top-0 z-1'>
        <tr className='text-left'>{header}</tr>
      </thead>
      <tbody>{rows.map((row) => (row.visible ? row.element : []))}</tbody>
    </table>
  );
};

export default DataTable;
