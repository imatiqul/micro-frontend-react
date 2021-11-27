import React, { useState } from "react";
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./CatalogContainer.scss";

const queryClient = new QueryClient();

const CatalogContainer = ({addItemToBasket }) =>
{

  return (
    <QueryClientProvider client={queryClient}>   
      <Catalogs addItemToBasket={addItemToBasket} />
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
  );
}

function useCatalogs() {
    return useQuery("catalogs", async () => {
      const { data } = await axios.get(
        "http://host.docker.internal:5202/c/api/v1/catalog/items?pageIndex=0&pageSize=14"
      ,  { crossdomain: true });
      return data;
    });
  }
  
// function useAddItemToBasket(catalog) {
//   let basket = { buyerId: '', items: [] };
//   basket.items.push(catalog);
//   let url = 'http://host.docker.internal:5202/b/api/v1/basket/';

//     const headers = { 
//         'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTEiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJhM3JNVWdNRnY5dFBjbExhNnlGM3pBa2ZxdUUifQ.eyJuYmYiOjE2MzcwMDczNjAsImV4cCI6MTYzNzAxMDk2MCwiaXNzIjoibnVsbCIsImF1ZCI6WyJvcmRlcnMiLCJiYXNrZXQiLCJ3ZWJzaG9wcGluZ2FnZyIsIm9yZGVycy5zaWduYWxyaHViIl0sImNsaWVudF9pZCI6ImpzIiwic3ViIjoiNmY0NzlmYjYtMTFlNi00YTdjLTllMjUtYzQzY2I5Yzc1ZjQ2IiwiYXV0aF90aW1lIjoxNjM3MDA3MzYwLCJpZHAiOiJsb2NhbCIsInByZWZlcnJlZF91c2VybmFtZSI6ImRlbW91c2VyQG1pY3Jvc29mdC5jb20iLCJ1bmlxdWVfbmFtZSI6ImRlbW91c2VyQG1pY3Jvc29mdC5jb20iLCJuYW1lIjoiRGVtb1VzZXIiLCJsYXN0X25hbWUiOiJEZW1vTGFzdE5hbWUiLCJjYXJkX251bWJlciI6IjQwMTI4ODg4ODg4ODE4ODEiLCJjYXJkX2hvbGRlciI6IkRlbW9Vc2VyIiwiY2FyZF9zZWN1cml0eV9udW1iZXIiOiI1MzUiLCJjYXJkX2V4cGlyYXRpb24iOiIxMi8yMSIsImFkZHJlc3NfY2l0eSI6IlJlZG1vbmQiLCJhZGRyZXNzX2NvdW50cnkiOiJVLlMuIiwiYWRkcmVzc19zdGF0ZSI6IldBIiwiYWRkcmVzc19zdHJlZXQiOiIxNTcwMyBORSA2MXN0IEN0IiwiYWRkcmVzc196aXBfY29kZSI6Ijk4MDUyIiwiZW1haWwiOiJkZW1vdXNlckBtaWNyb3NvZnQuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV9udW1iZXIiOiIxMjM0NTY3ODkwIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9yZGVycyIsImJhc2tldCIsIndlYnNob3BwaW5nYWdnIiwib3JkZXJzLnNpZ25hbHJodWIiXSwiYW1yIjpbInB3ZCJdfQ.HHdBdiyDBtRUn_B_fnBmmh05T-1tOrwrpn1_Rv4eMjUTYstSyyxPbGZ_tZkbZmJBCDLXm4Lx6HyxFipgyXls_qXtsHkKcppqTfDdiWWNvZ4q7UNdxqF3vrjD-BLcARxryMd3QFYB3-IefMk0vJnsng33UGr4oU_AZMiO1R6jN-O96I97K-455QLO-bWDOKkeeEj9jfGcKPY6WLE_FMJzB6JXbueSYotG5WMnOJXf2wgvfSKFpZ9Pg6fQNGAiolcKKWLNM6g8Omph68e_15Z1WU86f6NOlMi-wKsyDBis-yd40fQS75R8ZtPyZStUe8j9XIdKcYUqA5IX1J3C_lyVOg',
//     };
//     axios.post(url, basket, { headers })
//         .then(response => true);

// }


function useAddItemToBasket(catalog) {
  basket.items.push(catalog); 
        
}

function Catalogs({ addItemToBasket }) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useCatalogs();

    return (
      <div className="esh-catalog mb-5">
        <div className="container">
          {status === "loading" ? (
            "Loading..."
          ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
            <div className="esh-catalog-items row">
                {                  
                  data.data && data.data.map((catalog, index) => (
                  <div  className="col-12 col-sm-6 col-md-4 col-lg-3" key={catalog.id}>
                    <div className="esh-catalog-item" onClick={()=>addItemToBasket(catalog)}>
                    <div className="esh-catalog-thumbnail-wrapper">
                        <div className="esh-catalog-thumbnail-icon d-flex justify-content-center">
                            <img className="esh-catalog-thumbnail-icon-svg" src="./src/assets/images/add.svg" />
                        </div>
                        <img className="esh-catalog-thumbnail" src={catalog.pictureUri} />
                    </div>
                    <div className="esh-catalog-details d-flex justify-content-between align-items-center">
                        <div className="esh-catalog-name ml-3">
                            <span>{catalog.name}</span>
                        </div>
                        <div className="esh-catalog-price mr-3">
                            <span>{catalog.price}</span>
                        </div>
                    </div>
                    </div>
                  </div>
                  ))
                }
              <div>{isFetching ? "Background Updating..." : " "}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
export default CatalogContainer;