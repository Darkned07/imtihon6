import React from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTime } from "../hooks/useTime";
import { useDeleteRecip } from "../hooks/useDeleteRecip";

function RecipiesList({ recipies }) {
  const { deleteRecip } = useDeleteRecip();
  const { getDifference } = useTime();
  const handleDelete = (id) => {
    deleteRecip("recipies", id);
  };
  return (
    <div className="my-[20px]  ">
      <h2 className="md:text-[30px] sm:text-[20px] font-bold text-center">
        All recipies: {recipies.length}
      </h2>
      <ul className="mt-[10px] flex flex-wrap gap-6 justify-center ">
        {recipies
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .map((recip) => {
            return (
              <li key={recip.id}>
                <div className="card card-compact h-full  bg-base-100 shadow-xl w-72 md:w-80">
                  <figure>
                    <img
                      src={recip.images[0]}
                      alt={recip.title}
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title md:text-[25px] sm:text-[23px] text-[20px]">
                      {recip.title}
                      {getDifference(recip.time) && (
                        <div className="badge badge-secondary">NEW</div>
                      )}
                    </h2>
                    <p className="flex flex-row items-center gap-1">
                      <MdOutlineAccessTimeFilled />
                      {recip.cookingTime}
                    </p>
                    <p className="line-clamp-5">{recip.method}...</p>
                    <div className="card-actions justify-end">
                      <label
                        htmlFor="my_modal_6"
                        className="btn btn-sm btn-outline btn-secondary"
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
                              onClick={() => handleDelete(recip.id)}
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
                      <Link
                        to={`/recipe/${recip.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default RecipiesList;
