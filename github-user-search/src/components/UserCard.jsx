export default function UserCard({ user }) {
  return (
    <div className="border rounded p-4 flex items-center gap-4">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />

      <div>
        <h3 className="font-bold">{user.login}</h3>
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
