import DashboardItem from "@/components/DashboardItem"
import Icon from "@/components/Icon"

export type DashboardProps = {
  
}

export default function Dashboard({  }: DashboardProps) {
  return (
    <div className="">
      <h2 className="text-slate-900 text-4xl leading-normal font-semibold">Hello Admin,</h2>
      <p className="mb-8 text-slate-400 text-lg">This is what we got you for today.</p>
      
      <div className="flex flex-wrap gap-8">
        <div className="grow basis-0 flex flex-wrap gap-8">
          <DashboardItem
            icon={<Icon icon="dashboard_articles"/>}
            title="Articles"
            summary="4,950 New Updates"
          />
          <DashboardItem
            icon={<Icon icon="dashboard_categories"/>}
            title="Categories"
            summary="10,275 New Updates"
          />
        </div>
        <div className="grow basis-0 flex flex-wrap gap-8">
          <DashboardItem
            icon={<Icon icon="dashboard_stories"/>}
            title="Stories"
            summary="4,193 New Updates"
          />
          <DashboardItem
            icon={<Icon icon="dashboard_advetisements"/>}
            title="Advertisements"
            summary="928 New Updates"
          />
        </div>
      </div>
    </div>
  )
}
