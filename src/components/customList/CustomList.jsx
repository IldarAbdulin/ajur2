import React from 'react';

export default function CustomList({ h3, paragraph }) {
  const [isActive, setIsActive] = React.useState(false);
  const onActive = () => setIsActive(!isActive);
  return (
    <div className="price-work">
      <div className="price-work-name" onClick={onActive}>
        <h3>{h3}</h3>
        <div className="price-work-svg">
          {!isActive ? (
            <svg
              width="40"
              height="40"
              viewBox="0 0 30 29"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2499 16.7891H16.7916V23.2475C16.7916 23.59 16.6555 23.9186 16.4133 24.1608C16.171 24.4031 15.8425 24.5391 15.4999 24.5391C15.1573 24.5391 14.8288 24.4031 14.5866 24.1608C14.3443 23.9186 14.2083 23.59 14.2083 23.2475V16.7891H7.74992C7.40735 16.7891 7.07881 16.6531 6.83657 16.4108C6.59434 16.1686 6.45825 15.84 6.45825 15.4975C6.45825 15.1549 6.59434 14.8264 6.83657 14.5841C7.07881 14.3419 7.40735 14.2058 7.74992 14.2058H14.2083V7.74748C14.2083 7.40491 14.3443 7.07637 14.5866 6.83413C14.8288 6.5919 15.1573 6.45581 15.4999 6.45581C15.8425 6.45581 16.171 6.5919 16.4133 6.83413C16.6555 7.07637 16.7916 7.40491 16.7916 7.74748V14.2058H23.2499C23.5925 14.2058 23.921 14.3419 24.1633 14.5841C24.4055 14.8264 24.5416 15.1549 24.5416 15.4975C24.5416 15.84 24.4055 16.1686 24.1633 16.4108C23.921 16.6531 23.5925 16.7891 23.2499 16.7891Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                fill="#F8F8F8"
              />
            </svg>
          )}
        </div>
      </div>
      {isActive && <div className="price-work-prices">{paragraph}</div>}
    </div>
  );
}
