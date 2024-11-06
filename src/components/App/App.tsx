import { useState, useEffect } from "react";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import requestImg from "../services/api";
import { Image, Response } from "./App.types.js";

// function App() {
//   const [searchValue, setSearchValue] = useState(null);
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showBtn, setShowBtn] = useState(false);
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(null);
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   const [modalImage, setModalImage] = useState(null);

//   const handleSearch = (value) => {
//     setImages([]);
//     setPage(1);
//     setSearchValue(value);
//   };

//   const handleClickLoadMoreBtn = () => {
//     const nextPage = page + 1;
//     setPage(nextPage);
//   };

//   const showLoadMoreButton = (allPages) => {
//     if (allPages !== page) {
//       return setShowBtn(true);
//     }
//     return setShowBtn(false);
//   };

//   const handleOpenModal = (data) => {
//     setIsOpenModal(true);
//     setModalImage(data);
//   };

//   const handleCloseModal = () => {
//     setIsOpenModal(false);
//   };

//   useEffect(() => {
//     if (searchValue === null) {
//       return;
//     } else {
//       const fetchImgBySearchValue = async () => {
//         try {
//           setError(null);
//           setIsLoading(true);

//           const data = await requestImg(searchValue, page);
//           if (data.results.length === 0) {
//             setImages([]);
//             setError("Error");
//           } else {
//             const addNewPageImg = [...images, ...data.results];
//             setImages(addNewPageImg);
//             showLoadMoreButton(data.total_pages);
//             // console.log(data.total_pages);
//           }
//         } catch (err) {
//           console.log(err.message);
//           setImages([]);
//           setError(err.message);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       fetchImgBySearchValue();
//     }
//   }, [searchValue, page]);

//   useEffect(() => {
//     if (isOpenModal) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "scroll";
//     }
//   }, [isOpenModal]);

//   return (
//     <div className={css.container}>
//       <SearchBar onSubmit={handleSearch} />
//       {searchValue === "" && <Toaster />}

//       {Array.isArray(images) && images.length !== 0 && (
//         <ImageGallery images={images} onClick={handleOpenModal} />
//       )}
//       {isOpenModal && (
//         <ImageModal
//           isOpen={isOpenModal}
//           onModalImg={modalImage}
//           onCloseModal={handleCloseModal}
//         />
//       )}

//       {error !== null && <ErrorMessage onError={searchValue} />}

//       {isLoading && <Loader />}
//       {showBtn && images.length > 0 && (
//         <LoadMoreBtn onClickBtn={handleClickLoadMoreBtn} />
//       )}
//     </div>
//   );
// }

function App() {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleSearch = (value: string): void => {
    if (value !== null) {
      setImages([]);
      setPage(1);
      setSearchValue(value);
    }
  };

  const handleClickLoadMoreBtn = (): void => {
    const nextPage: number = page + 1;
    setPage(nextPage);
  };

  const showLoadMoreButton = (allPages: number) => {
    if (allPages !== page) {
      return setShowBtn(true);
    }
    return setShowBtn(false);
  };

  const handleOpenModal = (data: Image): void => {
    setIsOpenModal(true);
    setModalImage(data);
  };

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (searchValue === null) {
      return;
    } else {
      const fetchImgBySearchValue = async (): Promise<void> => {
        try {
          setError(false);
          setIsLoading(true);

          const data: Response = await requestImg(searchValue, page);
          if (data.results.length === 0) {
            setImages([]);
            setError(true);
          } else {
            const addNewPageImg = [...images, ...data.results];
            setImages(addNewPageImg);
            showLoadMoreButton(data.total_pages);
            console.log(addNewPageImg);
          }
        } catch {
          setImages([]);
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };
      fetchImgBySearchValue();
    }
  }, [searchValue, page]);

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpenModal]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {searchValue === "" && <Toaster />}

      {Array.isArray(images) && images.length !== 0 && (
        <ImageGallery images={images} onClick={handleOpenModal} />
      )}
      {isOpenModal && modalImage !== null && (
        <ImageModal
          isOpen={isOpenModal}
          onModalImg={modalImage}
          onCloseModal={handleCloseModal}
        />
      )}

      {error !== false && searchValue !== null && (
        <ErrorMessage onError={searchValue} />
      )}

      {isLoading && <Loader />}
      {showBtn && images.length > 0 && (
        <LoadMoreBtn onClickBtn={handleClickLoadMoreBtn} />
      )}
    </div>
  );
}

export default App;
