import { useEffect, useState } from "react";

const useSurahs = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const getSurahs = async () => {
      const res = await fetch("http://api.alquran.cloud/v1/surah/1");
      const data = await res.json();
      setSurahs(data.surahs);
    };
    getSurahs();
  }, []);

  // console.log(surahs)

  return { surahs, setSurahs };
};

export default useSurahs;
