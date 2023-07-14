import { type BookDetail, type FormState } from './bookDetCont.type';

export function getActiveForm(activeTab: FormState, bookDetail: BookDetail) {
  switch (activeTab) {
    case 'Description': {
      return <div>{bookDetail.desc}</div>;
    }
    case 'Authors': {
      return <div>{bookDetail.authors}</div>;
    }
    case 'Reviews': {
      return (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In natus
          laudantium nulla sed, ratione eos exercitationem ex, reiciendis iste
          maxime dolores dolorem est inventore laboriosam repellendus possimus
          fuga unde fugiat!
        </div>
      );
    }
    default: {
      return null;
    }
  }
}
