import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-red-950 text-white flex p-2 justify-between">
      <div className="flex gap-x-5 items-center">
        <span className="w-14 h-14 border rounded-full flex justify-center items-center bg-white overflow-hidden">
          <Image src="/static/images/reactjs-logo.jpeg" width={56} height={56} alt="School's Logo" />
        </span>
        <span className="text-2xl">Student Information System</span>
      </div>
      <nav className="self-end">
        <ul className="flex gap-x-3 list-none">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/students">Students</a>
          </li>
          <li>
            <a href="/subjects">Subjects</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}