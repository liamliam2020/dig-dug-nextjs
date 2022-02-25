import React, { useState, useEffect, useRef } from 'react';

// Taken from Dan Abramov and wonderfully explained in his blog post here; https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export default function useInterval(callback: any, delay: number) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}