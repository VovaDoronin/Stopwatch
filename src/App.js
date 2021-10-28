import React, { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
// import { Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
import './App.css';
import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';

function App() {
  const [time, setTime] = useState(0);
  const [interv, setInterv] = useState(false);

  useEffect(() => {
    //   const timer$ = new Observable((observer) => {
    //     let count = 0;
    //     const intervalId = setInterval(() => {
    //       observer.next(count += 1);
    //     }, 1000);

    //     return () => {
    //       clearInterval(intervalId);
    //     };
    //   });

    //   const subscribtion$ = timer$
    //     .subscribe({
    //       next: () => {
    //         if (interv) {
    //           setTime(val => val + 1);
    //         }
    //       },
    //     });

    //   return (() => {
    //     subscribtion$.unsubscribe();
    //   });
    // }, [interv]);

    const subscribtion$ = new Subject();
    interval(1000)
      .pipe(takeUntil(subscribtion$))
      .subscribe(() => {
        if (interv) {
          setTime(val => val + 1);
        }
      });
    return () => {
      subscribtion$.next();
      subscribtion$.complete();
    };
  }, [interv]);

  const start = () => {
    setInterv(prevState => !prevState);
  }

  const stop = () => {
    setTime(0);
    setInterv(false);
  }

  const wait = () => {
    if (time !== 0) {
      setInterv(false)
    }
  }

  const reset = () => {
    setTime(0);
    setInterv(true);
  }

  return (
    <main className='main'>
      <div className='wrapper'>
        <Timer time={time} />
        <Button start={start} stop={stop} wait={wait} reset={reset} />
      </div>
    </main>
  );
}

export default App;