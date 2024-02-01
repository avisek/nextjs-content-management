import DatePicker from '@/components/DatePicker'
import ProfilePopover from '@/components/ProfilePopover'
import TopBar from '@/components/TopBar'
import Dashboard from '@/fragments/Dashboard'

export default function Content() {
  return (
    <>
      <TopBar
        start={
          <>
            <TopBar.Search />
          </>
        }
        end={
          <>
            <DatePicker />
            <ProfilePopover />
          </>
        }
      >
        <Dashboard />
      </TopBar>
    </>
  )
}
