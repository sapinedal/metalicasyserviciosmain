const initScrollAnimations = () => {
	if (typeof window === 'undefined' || typeof document === 'undefined') return;

	const elements = Array.from(document.querySelectorAll<HTMLElement>('.scroll-animate'));
	if (elements.length === 0) return;

	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				(entry.target as HTMLElement).classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		}
	}, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });

	for (const el of elements) {
		observer.observe(el);
	}
};

if (typeof document !== 'undefined') {
	document.addEventListener('astro:page-load', initScrollAnimations);
	document.addEventListener('DOMContentLoaded', initScrollAnimations);
}

export {};
