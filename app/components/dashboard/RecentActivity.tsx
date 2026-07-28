// components/dashboard/RecentActivity.tsx
const activity = [
  {
    user: "@TechGuru99",
    action: "submitted a bulk shipment request",
    time: "12:06 PM",
  },
  {
    user: "@SupportKen",
    action: "added a priority tag to Order ID 778899L",
    time: "10:48 AM",
  },
  {
    user: "@DailyMax88",
    action: "initiated a return process for Order ID 445562EU",
    time: "09:30 AM",
  },
  {
    user: "@AdminLisa",
    action: "resolved a delivery issue for Order ID 123456YZ",
    time: "08:15 AM",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-gray-100/50 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-[#333333]">
        Recent Activity
      </h3>
      <div className="mt-4 space-y-4">
        {activity.map((a, i) => (
          <div key={i} className="flex gap-3 text-xs">
            <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#856DF3]" />
            <div>
              <p className="text-[#333333]">
                User{" "}
                <span className="font-semibold text-[#856DF3]">{a.user}</span>{" "}
                {a.action}
              </p>
              <p className="mt-0.5 text-[#B9B9B9]">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
