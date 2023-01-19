interface ProgressBarProps{
    progress: number
}

export function ProgressBar(props: ProgressBarProps){
    return(
        <div className='h-3 rounded-lg bg-zinc-700 w-full mt-4'>
          <div 
          role="progerssbar"
          aria-label="Progresso de hábitos completados nesse dia"
          aria-valuenow={props.progress}
          className='h-3 bg-violet-600 rounded-lg' 
          style={{width: `${props.progress}%`}}
          />
        </div>
    )
}









