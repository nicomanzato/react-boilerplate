import React from 'react';
import './primary-page-layout.scss';
import Spinner from 'components/spinner/spinner';

export const PrimaryPageLayout = ({ isLoading, children, className }: Props ) => {
  return (
    <div className={`primary-page-layout ${className}`}>
      { !isLoading && children }
      { isLoading && (
        <div className="primary-page-layout__spinner">
          <Spinner/>
        </div>
      ) }
    </div>
  );
};

export default PrimaryPageLayout;

interface Props {
  isLoading?: boolean;
  children: any;
  className: string;
}