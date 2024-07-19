
export default function EventDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="w-9/12 mx-auto pt-8">
            <div className="text-lg">
                This event id is {params.id}
            </div>
        </div>
    )
}