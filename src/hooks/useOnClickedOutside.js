import { useEffect } from 'react';

// Hook
/**
 * __EXAMPLE__:
 *   ref = const ref = useRef();
 *   useOnClickOutside(ref, () => setModalOpen(false));
 */

export const useOnClickedOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },

    [ref, handler]
  );

}
