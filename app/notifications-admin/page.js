import Link from "next/link";

const notifications = ["Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1. I get a message thatsays that the file...",
    "  Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1. I get a message thatsays that the file...",
    "  Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1. I get a message thatsays that the file...",
    "  Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1. I get a message thatsays that the file...",
    "  Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1. I get a message thatsays that the file...",
    "  Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1. I get a message thatsays that the file...",
    "  Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1. I get a message thatsays that the file..."
];

const NotificationsAdmin = () => {
    return (
        <div className="pt-16">
            <div className="w-[95%] m-auto pb-8">
                <h1 className="text-black font-bold">NOTIFICATIONS</h1>
                <p className="text-gray-600 text-sm">view all your notifications below</p>
            </div>
            <div className="bg-white w-[95%] m-auto shadow-md rounded-md space-y-8 py-6">
                {notifications.map((msg, index) =>
                    <p key={index} className="border-b-2 border-b-gray-300 border-b-solid pl-6 pb-6 text-sm" >
                        <Link href="notifications-admin/id">
                            {msg}
                        </Link>
                    </p>
                )}
            </div>
        </div>
    )
};

export default NotificationsAdmin;