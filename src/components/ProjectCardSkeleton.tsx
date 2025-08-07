export default function ProjectCardSkeleton() {
    return (
        <div className="animate-pulse border rounded-lg shadow-md overflow-hidden bg-white">
            <div className="h-48 bg-gray-200" />
            <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
                <div className="flex gap-2 mt-2">
                    <div className="h-4 w-12 bg-gray-200 rounded-full" />
                    <div className="h-4 w-16 bg-gray-200 rounded-full" />
                </div>
                <div className="flex justify-between mt-4">
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                    <div className="flex gap-2">
                        <div className="h-3 w-10 bg-gray-200 rounded" />
                        <div className="h-3 w-10 bg-gray-200 rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}
