import { useParams } from "next/navigation";
import { useGetSingleTransactionQuery } from "@/store/api/transactionsApi";
import { time } from "@/utils/time&dates";

const ApprovalFlow = () => {
  const params = useParams();
  const InvoiceId = params.InvoiceId;
  const { isLoading, isSuccess, isError, error, data } =
    useGetSingleTransactionQuery(InvoiceId);
  const invoice = data?.data?.transaction;

  return (
    <div className="bg-[#F0FFEE] rounded-lg shadow-md px-6 py-6 space-y-4">
      <h1 className="font-bold text-[#46B038] pb-6">Approval Flow</h1>
      <div className="space-y-2">
        <h2 className="text-gray-700 font-semibold">Initiated By</h2>
        <p className="text-gray-500">Martins Marvins</p>
      </div>
      <div className="space-y-2">
        <h2 className="text-gray-700 font-semibold">Government Allocation</h2>
        <p className="text-gray-500">Martins Marvins</p>
      </div>
      <div className="space-y-2">
        <h2 className="text-gray-700 font-semibold">Company Allocation</h2>
        <p className="text-gray-500">Martins Marvins</p>
      </div>
      <div className="space-y-2">
        <h2 className="text-gray-700 font-semibold">Date Initiated</h2>
        <p className="text-gray-500">{time.formatDate(invoice?.createdAt)}</p>
      </div>
    </div>
  );
};

export default ApprovalFlow;
