import { Footer } from '@/components/footer'
import Header  from '@/components/header'
import { Skeleton } from '@/components/ui/skeleton'

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header></Header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Skeleton className='h-[400px] w-full rounded-xl'></Skeleton>
        <Skeleton className='h-[20px] w-[150px] rounded-xl'></Skeleton>
        <div className='flex flex-row'>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
        </div>
        <div className='flex flex-col'>
          <Skeleton className='h-[20px] w-[400px] mt-2 mb-2 rounded-xl'></Skeleton>
          <Skeleton className='h-[20px] w-[300px] mt-2 mb-2 rounded-xl'></Skeleton>
          <Skeleton className='h-[20px] w-[200px] mt-2 mb-2 rounded-xl'></Skeleton>
        </div>
        <div className='flex flex-row'>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
          <Skeleton className="h-[300px] w-[300px] rounded-xl ml-5 mr-5"></Skeleton>
        </div>
        <div className='flex flex-col'>
          <Skeleton className='h-[20px] w-[400px] mt-2 mb-2 rounded-xl'></Skeleton>
          <Skeleton className='h-[20px] w-[300px] mt-2 mb-2 rounded-xl'></Skeleton>
          <Skeleton className='h-[20px] w-[200px] mt-2 mb-2 rounded-xl'></Skeleton>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
