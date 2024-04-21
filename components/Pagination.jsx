import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// import {useRouter } from "next/navigation";

// const Pagination = ({ totalPages, form_Id, currentPageNum }) => {
//   const router = useRouter();

//   let pages = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pages.push(i);
//   }

//   const switchPage = (page) => {
//     router.push(`/user/new-application?form_id=${form_Id}&page=${page}`);
//   };

//   const navigateToPrevPage = () => {
//     if (+currentPageNum === 1 || !currentPageNum) {
//       router.push(`/user/new-application?form_id=${form_Id}`);
//     } else {
//       router.push(
//         `/user/new-application?form_id=${form_Id}&page=${+currentPageNum - 1}`
//       );
//     }
//   };

//   const navigateToNextPage = () => {
//     if (!currentPageNum) {
//       router.push(`/user/new-application?form_id=${form_Id}&page=${2}`);
//     }
//     if (+currentPageNum === totalPages) {
//       router.push(
//         `/user/new-application?form_id=${form_Id}&page=${totalPages}`
//       );
//     } else {
//       router.push(
//         `/user/new-application?form_id=${form_Id}&page=${+currentPageNum + 1}`
//       );
//     }
//   };

//   const activePageClass = "bg-gray-500 text-white";
//   const inActivePageClass = "bg-white text-gray-400";

//   return (
//     <nav aria-label="Page navigation example">
//       <ul class="inline-flex -space-x-px text-sm">
//         <li>
//           <button
//             onClick={navigateToPrevPage}
//             className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             Previous
//           </button>
//         </li>
//         {pages.map((page, index) => (
//           <li key={page}>
//             <button
//               onClick={() => switchPage(page)}
//               className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
//                 !currentPageNum && index === 0
//                   ? activePageClass
//                   : +currentPageNum === page
//                   ? activePageClass
//                   : inActivePageClass
//               }`}
//             >
//               {page}
//             </button>
//           </li>
//         ))}
//         <li>
//           <button
//             onClick={navigateToNextPage}
//             className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

const Paginations = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginations;
