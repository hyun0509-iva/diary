import React from "react";
import { Link } from "react-router-dom";
import { getDate } from "@utils/lib";

const DiaryItem = (props) => {
  const { id, writer, title, content, imgUrl, createdAt } = props;
  const noImg = '/assets/images/no-img.png';
  return (
    <div className="diary-item">
      <Link to={`/detail/${title ? title.replaceAll(' ', '-') : '제목-없음'}`} state={id}>
        <div className="img-wrap">{<img src={imgUrl|| noImg} alt="" />}</div>
        <div className="cnt-inner">
          <div className="title">
            <span style={{fontSize: 18, fontWeight: "bolder"}}>{title || '제목 없음'}</span>
          </div>
          <div className="content">
            <span>{content}</span>
          </div>
          <div className="create-date">
            <span>{getDate(createdAt)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DiaryItem;
