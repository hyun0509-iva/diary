import React, { useCallback, useEffect, useState } from "react";
import DiaryListView from "../../components/DiaryListView";
import { fetchGetDiary } from "../../services/diary";

const DiaryList = () => {
  const [diary, setDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDiaryList = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchGetDiary();
    setIsLoading(false);
    setDiary(data);
  }, []);

  useEffect(() => {
    fetchDiaryList();
  }, [fetchDiaryList]);

  if (isLoading) return <div>로딩중...</div>;
  return <DiaryListView isLoading={isLoading} diaryList={diary} />;
}

export default DiaryList;
