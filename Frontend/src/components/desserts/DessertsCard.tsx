import { FC } from "react";

interface Desserts {
  name: string | undefined;
  price: number | undefined;
  image: string | undefined;
}

const DessertsCard: FC<Desserts> = ({ name, price, image }) => {
  return (
    <div className="border border-gray-200 bg-white p-6 shadow-sm rounded-3xl ">
      <div className="h-40 w-full">
        <img className="mx-auto h-full w-full rounded-[50%]" src={image} />
      </div>
      <div className="pt-6">
        <div className="text-lg font-semibold leading-tight text-gray-900 dark:text-white">
          {name}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xl font-extrabold leading-tight text-gray-900 dark:text-white">
            ${price}
          </p>

          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-blue-800 px-3 py-2.5 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <>
              <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Comprar
            </>
          </button>
        </div>
      </div>
      {/* <AuthUser isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}></AuthUser> */}
    </div>
  );
};

export default DessertsCard;
