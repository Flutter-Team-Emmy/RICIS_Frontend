import { useCreateFlutterTransactionMutation } from "@/store/api/applicationApi";
import Btn from "../Btn";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { normalizeErrors } from "@/utils/helpers";
import { toast } from "react-toastify";

const PaymentModal = ({ application_id }) => {
  const router = useRouter();
  const [
    createFlutterTransaction,
    { isLoading, isSuccess, isError, error, data },
  ] = useCreateFlutterTransactionMutation();

  const createNewPayment = async () => {
    if (!application_id) {
      toast.error("Application id not found!", { autoClose: 3000 });
      return;
    }
    const payload = { application_id };
    await createFlutterTransaction(payload);
  };

  useEffect(() => {
    if (error) {
      const err = normalizeErrors(error);
      toast.error(err, { autoClose: 2000 });
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      const paymentLink = data?.data?.link;
      router.push(paymentLink);
    }
  }, [isSuccess]);

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-[rgb(0,0,0,0.8)] bg-opacity-50 z-[9999]">
      <div className="bg-white px-4 py-6 rounded shadow-md md:w-[500px] z-[9999] space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl text-gray-800">Proceed to payment</h1>
          <p className="text-sm textgray-400">
            To complete your application submission, you're required to make
            payment.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="text-sm bg-blue-400 py-1.5 px-4 shadow-md rounded-md text-white hover:opacity-75">
            Pay later
          </button>
          <Btn
            text="Pay now"
            loadingMsg="creating transaction..."
            bgColorClass="bg-[#46B038]"
            loading={isLoading}
            handleClick={createNewPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
