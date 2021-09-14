import { useEffect, useRef } from 'react';

export function useIntersectionObserver(options: IntersectionObserverInit = { threshold: 0.5 }) {
  const observerViewRef = useRef<HTMLElement>(null);
  const scrollViewRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const { current: observerView} = observerViewRef;
    const $items = Array.from(observerView?.children as HTMLCollection);
    
    const { current: scrollView} = scrollViewRef;
    const $sections = Array.from(scrollView?.children as HTMLCollection);

    const observer = new IntersectionObserver(entries => entries.forEach(
      entry => {
        const entryId = entry.target.getAttribute('id') ?? '';

        const [item] = $items.filter(item => {
          const href = item.getAttribute('href');

          return href === `#${entryId}`;
        });
        
        if (entry.isIntersecting) {
          item?.classList.add('active');
        } else {
          item?.classList.remove('active');
        }

      },
    ), options);

    for (const el of $sections) observer.observe(el);
    
    return () => {
      for (const el of $sections) observer.unobserve(el);
    };
  }, [observerViewRef, scrollViewRef, options]);

  return { observerViewRef, scrollViewRef };
}
