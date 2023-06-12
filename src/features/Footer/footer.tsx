import Style from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={Style.container}>
      <span>©2022 Bookstore</span>
      <span>All rights reserved</span>
    </div>
  );
};
