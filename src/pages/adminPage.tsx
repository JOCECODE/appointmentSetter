export default function adminPage() {
  return (
    <>
      <div id="adminParent" className=" h-[100vh] w-[100wh] bg-red-600">
          {/* Header */}
          <div className="flex flex-row">
            <div className="flex flex-col w-[50%] bg-yellow-500">Logo</div>
            <div className="flex flex-col w-[50%] bg-purple-500 text-right">Hi, Alyssa Queen</div>

          </div>

          {/* Can add a navbar here when thinking about navigating the website */}

          {/* Content Setup */}
          <div className="flex flex-row">
            <div className="flex flex-col w-[25%] h-[96vh] bg-orange-500">left Side Div</div>
            <div className="flex flex-col w-[75%] h-[96vh] bg-blue-500">right side</div>

          </div>
      </div>
    </>
  )
}