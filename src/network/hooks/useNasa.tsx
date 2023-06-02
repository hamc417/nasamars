import { useEffect, useState } from "react";
import { apiKey, urlBase } from "../../pages/home/constants";
import { Photos } from "../../pages/home/interface";

export const useNasa = () => {
  const [dataMars, setDataMars] = useState<Photos>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      `${urlBase}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed.");
        }
      })
      .then((data) => {
        setDataMars(data);
      })
      .catch((error) => {
        console.log("***error", error);
      });
  }, []);

  useEffect(() => {
    if (dataMars) setIsLoading(false);
  }, [dataMars]);

  return { dataMars, isLoading };
};
