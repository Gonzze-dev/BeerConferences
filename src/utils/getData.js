import {collection, getDocs } from "firebase/firestore";
import { db } from "../FB/Firebase";

export const getData = async () => {
    const data = [];
    try {
      const res = await getDocs(collection(db, "conferences"));

      res.forEach((resData) => {
        data.push({ ...resData.data(), id: resData.id });
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }

    return data
  };
  
  
