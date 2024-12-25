import { FC } from "react";
 
interface Oferts {
  description: string | undefined;
  price: number | undefined;
}

const OfertsCard: FC<Oferts> = ({ description, price }) => {

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm ">
      <div className="">
        <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Precio ${price}
        </p>

        <div className="p-2 flex flex-col gap-2">
          <h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
            Incluye:
          </h1>
          <div className="text-lg font-semibold leading-tight text-justify text-gray-900 dark:text-white">
            {description}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-blue-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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

export default OfertsCard;
