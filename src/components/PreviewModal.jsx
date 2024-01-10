import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function PreviewModal({ doc }) {
  const title = doc[0];
  const ingr = doc[4];
  const img = doc[3];
  const method = doc[1];
  const cookingTime = doc[2];

  return (
    doc && (
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="my-[10px]">
            <div className="card card-side bg-base-100 shadow-xl flex p-[10px] md:flex-row sm:flex-col flex-col  ">
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box mx-[auto]">
                {img &&
                  img.map((img) => {
                    return (
                      <div className="carousel-item">
                        <img
                          src={img}
                          className="rounded-box w-[200px] h-sm   md:h-[400px] md:w-[300px] object-cover"
                        />
                      </div>
                    );
                  })}
              </div>

              <div className="card-body">
                <h2 className="card-title md:text-[25px]">{title}</h2>
                <h2 className="mt-[10px] font-bold md:text-[25px]">
                  Ingredients:
                </h2>
                <div className="flex flex-row gap-1">
                  {ingr &&
                    ingr.map((ingred) => {
                      return <span>{ingred},</span>;
                    })}
                </div>
                <h2 className="mt-[10px] font-bold md:text-[25px]">Method:</h2>
                <p>{method}</p>
                <div className="flex flex-row items-center gap-2">
                  <h2 className="mt-[10px] font-bold md:text-[25px]">
                    Cooking Time:
                  </h2>
                  <p className="mt-[15px]">{cookingTime}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    )
  );
}

export default PreviewModal;
