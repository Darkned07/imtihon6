import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetADocument } from "../hooks/useGetADocument";
import { useEffect, useState } from "react";
import { useDeleteRecip } from "../hooks/useDeleteRecip";

function Recipe() {
  const navigate = useNavigate();
  const { deleteRecip, isPending } = useDeleteRecip();
  const { id } = useParams();
  const { getDocument } = useGetADocument();
  const [document, setDocument] = useState();
  const [error, setError] = useState();

  getDocument("recipies", id)
    .then((data) => setDocument(data))
    .catch((error) => setError(error));

  const handleDelete = async (id) => {
    (await !isPending) ? navigate("/") : navigate(`/recipie/${id}`);
    deleteRecip("recipies", id);
  };

  return (
    <div>
      {document && (
        <div className="my-[10px] ">
          <div className="card card-side bg-base-100 shadow-xl flex p-[10px] md:flex-row sm:flex-col flex-col">
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box mx-[auto]">
              {document.images.map((img) => {
                return (
                  <div className="carousel-item object-cover">
                    <img
                      src={img}
                      className="rounded-box w-[200px] h-sm  md:h-md md:w-[400px] object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <div className="card-body">
              <h2 className="card-title md:text-[25px]">{document.title}</h2>
              <h2 className="mt-[10px] font-bold md:text-[25px]">
                Ingredients:
              </h2>
              <div className="flex flex-row gap-1">
                {document.ingredients.map((ingred) => {
                  return <span>{ingred},</span>;
                })}
              </div>
              <h2 className="mt-[10px] font-bold md:text-[25px]">Method:</h2>
              <p>{document.method}</p>
              <div className="flex flex-row items-center gap-2">
                <h2 className="mt-[10px] font-bold md:text-[25px]">
                  Cooking Time:
                </h2>
                <p className="mt-[15px]">{document.cookingTime}</p>
              </div>
              <div className="card-actions justify-end">
                <Link to="/" className="btn btn-outline">
                  Back Home
                </Link>
                <label
                  htmlFor="my_modal_6"
                  className="btn btn-outline btn-secondary"
                >
                  Delete
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Rostan ham o'chirishni istaysizmi ?
                    </h3>
                    <p className="py-4">
                      <button
                        onClick={() => handleDelete(id)}
                        className="btn btn-outline btn-warning"
                      >
                        Ha istayman
                      </button>
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my_modal_6" className="btn">
                        Close!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!document && (
        <div className="flex flex-row gap-1 items-center justify-center">
          <span className="md:text-[28px] text-[23px]">Loading</span>
          <span className="loading loading-spinner md:loading-md loading-sm"></span>
        </div>
      )}
      {!id && (
        <div className="flex flex-row gap-1 items-center justify-center">
          <span className="md:text-[28px] text-[23px]">Loading</span>
          <span className="loading loading-spinner md:loading-md loading-sm"></span>
        </div>
      )}
    </div>
  );
}

export default Recipe;
