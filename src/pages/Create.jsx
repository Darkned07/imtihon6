import { useEffect, useRef, useState } from "react";
import PreviewModal from "../components/PreviewModal";
import { toast } from "react-toastify";
import { useAddNewDoc } from "../hooks/useAddNewDoc";
import { useNavigate } from "react-router-dom";
import { useTime } from "../hooks/useTime";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Create() {
  const { user } = useGlobalContext();
  const { addNewDoc, recip, isPending } = useAddNewDoc();
  const { getTime } = useTime();
  const navigate = useNavigate();
  const title = useRef();
  const images = useRef();
  const ingredients = useRef();
  const method = useRef();
  const cookingTime = useRef();
  const [img, setImg] = useState([]);
  const [ingr, setIngr] = useState([]);
  const [doc, setDoc] = useState([]);
  const [mod, setMod] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePrev = (e) => {
    e.preventDefault();

    if (
      title.current.value &&
      img.length &&
      ingr.length &&
      method.current.value &&
      cookingTime.current.value
    ) {
      document.getElementById("my_modal_5").showModal();
    } else {
      toast.error("in the create about");
    }
    setDoc((prev) => {
      return [
        title.current.value,
        method.current.value,
        `${cookingTime.current.value} minutes`,
        img,
        ingr,
        getTime(),
        user.uid,
      ];
    });
  };

  const handleImg = (e) => {
    e.preventDefault();
    const imgs = images.current.value;
    if (img.length < 4) {
      if (!img.includes(imgs)) {
        setImg((prev) => {
          return [...prev, imgs];
        });
      } else {
        toast.error("bu rasmni avval qo'shgansiz :(");
      }
    } else {
      toast.error("limitdan oshib ketdingiz");
    }

    images.current.value = "";
  };

  const handleIngred = (e) => {
    e.preventDefault();
    const ingred = ingredients.current.value.trim();
    if (ingr.length < 8) {
      if (!ingr.includes(ingred)) {
        setIngr((prev) => {
          return [...prev, ingred];
        });
      } else {
        toast.error("bu ingredientsni avval qo'shgansiz :(");
      }
    } else {
      toast.error("limitdan oshib ketdingiz");
    }
    ingredients.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.current.value &&
      img.length &&
      ingr.length &&
      method.current.value &&
      cookingTime.current.value
    ) {
      addNewDoc("recipies", {
        title: title.current.value,
        method: method.current.value,
        cookingTime: `${cookingTime.current.value} minutes`,
        images: img,
        ingredients: ingr,
        time: getTime(),
        uid: user.uid,
      });
      setLoading(true);
    } else {
      toast.error("in the create about");
    }
  };

  useEffect(() => {
    if (!isPending && recip) {
      navigate("/");
    }
  }, [isPending, recip]);

  return (
    <div>
      {!loading && (
        <div className="flex flex-col items-center justify-center my-[20px] ">
          <PreviewModal doc={doc} />

          <h2 className="font-bold text-[25px]">Create Recipies:</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center md:w-[800px] w-full"
          >
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title:</span>
              </div>
              <input
                ref={title}
                type="text"
                placeholder="Title write"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Images:</span>
              </div>
              <div className="flex flex-row gap-2">
                <input
                  ref={images}
                  type="url"
                  placeholder="url write"
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  onClick={handleImg}
                  className="btn btn-sm md:btn-md btn-primary"
                >
                  Add
                </button>
              </div>
              <div className="label">
                <span className="label-text-alt mr-[5px]">Images:</span>
                <div className="flex flex-wrap gap-1">
                  {img.length > 0 &&
                    img.map((im) => {
                      return (
                        <img
                          key={im}
                          className="w-[80px] h-[50px]"
                          src={im}
                          alt=""
                        />
                      );
                    })}
                </div>
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">ingredients:</span>
              </div>
              <div className="flex flex-row gap-2">
                <input
                  ref={ingredients}
                  type="text"
                  placeholder="ingredients write"
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  onClick={handleIngred}
                  className="btn btn-sm md:btn-md btn-primary"
                >
                  Add
                </button>
              </div>
              <div className="label">
                <span className="label-text-alt">Ingredients:</span>
                <div className="flex flex-wrap gap-1 ">
                  {ingr.length > 0 &&
                    ingr.map((ing) => {
                      return <p key={ing}>{ing},</p>;
                    })}
                </div>
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">CookingTimes:</span>
              </div>
              <div className="flex flex-row gap-2">
                <input
                  ref={cookingTime}
                  type="text"
                  placeholder="CookingTimes write"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Method:</span>
              </div>
              <div className="flex flex-row gap-2">
                <textarea
                  ref={method}
                  placeholder="Method write"
                  className="input input-bordered w-full max-w-xs pt-[5px]"
                />
              </div>
            </label>
            <div className="flex flex-row mt-[10px] md:gap-[150px] sm:gap-[100px] flex-wrap gap-8">
              <button className="btn btn-sm md:btn-md btn-outline btn-info mr-auto ">
                Create
              </button>
              <button
                onClick={handlePrev}
                className="btn btn-sm md:btn-md btn-outline ml-auto btn-secondary"
              >
                Preview
              </button>
            </div>
          </form>
        </div>
      )}
      {loading && (
        <div className="flex flex-row gap-1 items-center justify-center">
          <span className="md:text-[28px] text-[23px]">Loading</span>
          <span className="loading loading-spinner md:loading-md loading-sm"></span>
        </div>
      )}
    </div>
  );
}

export default Create;
