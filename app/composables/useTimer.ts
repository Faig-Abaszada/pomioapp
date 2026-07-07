export function useTimer(initialMinutes: number) {
    const remainingSeconds = ref(initialMinutes * 60);
    const isRunning = ref(false);
    const pauseCount = ref(0);


    let intervalId: ReturnType<typeof setInterval> | null = null

    function start() {
        if (isRunning.value) return;
        if (remainingSeconds.value <= 0) {
          remainingSeconds.value = initialMinutes * 60;
        }
        isRunning.value = true;
        intervalId = setInterval(() => {
          // TODO 1: remainingSeconds.value-nu 1 azalt
          // TODO 2: 0-a çatanda stop() çağır (interval-ı təmizlə, isRunning=false)

          remainingSeconds.value--;
          if(remainingSeconds.value <= 0) {
            clearInterval(intervalId);
            isRunning.value = false;
          }
        }, 1000);
    }

    function pause() {
      // TODO 3: intervalId varsa clearInterval et, intervalId=null, isRunning=false
      // TODO 4: pauseCount.value-nu 1 artır

       if (intervalId) {
         clearInterval(intervalId);
         intervalId = null;
         isRunning.value = false;
         pauseCount.value++;
       }
    }

    function stop() {
      // TODO 5: intervalId varsa clearInterval et, intervalId=null
      // TODO 6: isRunning=false, remainingSeconds-i initialMinutes*60-a sıfırla

      if(intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      remainingSeconds.value = initialMinutes * 60;
      isRunning.value = false;
    }

    onUnmounted(() => {
      // TODO 7: intervalId varsa clearInterval et (komponent silinəndə "saatı söndür")
      if(intervalId) {
        clearInterval(intervalId);
      }

    })

    return {
        remainingSeconds,
        isRunning,
        pauseCount,
        start,
        pause,
        stop
    }

}