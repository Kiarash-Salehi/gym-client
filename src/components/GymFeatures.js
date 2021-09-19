import '../styles/GymFeatures.css';
import GymFeature from '../components/GymFeature';

const GymFeatures = () => {
	const gymFeatures = [
		{
			iconSrc: 'running.svg',
			title: 'مربی با سابقه',
			description: 'آقای مظاهر یزدانی',
			btnText: 'دیدن تمام مدارک و مدال ها',
			content: '1',
			modalDescription: 'آقای مظاهر یزدانی دارای مدارک x',
			images: ['10.jpeg', '12.jpeg', '13.jpeg', '14.jpeg']
		},
		{
			iconSrc: 'dumbbells.svg',
			title: 'تجهیزات باشگاه',
			description: 'باشگاه یوتاب فیتنس دارای کاملترین تجهیزات در منطقه میباشد.',
			btnText: 'دیدن تمامی تجهیزات',
			content: '2',
			images: ['9.jpeg', '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg']
		},
		{
			iconSrc: 'gym.svg',
			title: 'محیط باشگاه',
			description: 'ورزشکاران در باشگاه موظف هستند آرامش باشگاه را رعایت کنند و از الفاظ بد استفاده نکنند به همین سبب محیطی سالم و ورزشی در باشگاه غالب است.',
		}
	];
	return (
		<>
			<span className="gymFeaturesCircles"><img src="data:image/webp;base64,UklGRmgQAABXRUJQVlA4TFwQAAAvUcAUEBX5X///vRr5//7N7b333rM73Z3tZfq404uzvRd3p2f7bqb3nhlnyyu9F338EG93U+YfeAbFwWwxxyAu+mJe+jKMhMgRDg6KeRXF7CHRMCIohBBBFIMyIsQxP+i5i2ccdEvwbDkSOWHQFyYHg3HlQOSQF54lKA7xVYIuYogcyCjoDxGHV/D1Qo6IvuZ/AiBIkqSqFhawuMN7311xf9gTSAhqI0mSukhotjmiq8oZmbM/kOZ6nEH1JwwFL4I/wVpwcCCdSXEbjud6iNlITtNL/qdoqWBoT1W6R8ckwg+IXsjP50vuwkwIMPN0/RhH4QTcgBlwADPzGJxL8k5+fkg0nnAP/UVQEowmMruI4n34JEZiepiZp+JGHI0zcEWmgJnZ7BfscwEmwp5CMCvsn/dngiB4c+A8GRfDGqfhp9AwM0/D1TgdH8BV0MFrfoRP4Bh9HePAzGzPeRJvFxDm8ZngXZDbQz4C70fw38FxfpWag2fiCNyBMGbmGbCTLd6I4RgPZmbZBPwA7zE/h/dRhHkYggdByqyrfik+AwiW3Y33yPlOyBju+BReiepJAAXJl+MF+AJGwYE0ZF6dzaQp2DCz5SK8GZ9XC169FYfoVGTDudJ4ikq+CTl8U/35eSu+CLvomQUbQXOehD3PgsIxvoFjoroL8LSmK/FRHKN0vOMnCE7+Cuph/uu/hjVDWfCdUygu53nuz8YQ/oWZZbpL8RGcjHYznEcOHZJrgNHyOSiWjQ1Mvzz3Q1C1y0CWv/ZwZjcQ5jLG0RAcmFkpvxavx1A7g+jb4b4kFSZB5vl5PRvfFjxNaYl8Nc6BJygwD34Q3aUzOAgacxVj69qTMjPLv4MXYHWLHjdpt4+3Bh4/GmfjkHwXRTAf8m/hJWhwA1kFdjpE1rgOGuUvBd25iAn0Z5KD0gvxAdgoFYG6Hn3aywBXzenBx+P8WCAsFaEfhxvK6rTC0BVqYubfzqA/xzHWnuPzlbodJ0Grhgl2yQ5+TyLxjoRVHwYCJZsEjxMRbIRzl8ChCO8mkHUXxXn05jDG0f4trHZ531A0LI7+pjQejtIwOM/6Kl4JCtQPcSTOhhpl1Z4SK9gFXmOO+xJeTv5t23MUE6g6cIFNWv1ifBaeStDnGZFxOxCoscl/LbLlIEZ3OZ6n/mhQoG/3PUaphLfiNyJmEhcHanMQ4ynPZAuLc19NAwWq7ywgULKesmQK1ArfLyMOV2KZ77noxIkznobj8O3oZIKtoDz7w4FfXG1DWaUGgToWsYG4OO3BJ+D8WJTwVteu8GiUVW6IrUZZCVqfFRZmFvzONgQRrPZwfBCmaCQmu/GdqEWlLZ/P21GBT7NcghKVGmUFqg7FzXABWan+j62oh9eMI5pNCKq/ZFYme/8qmACV6rxEARtJGe3/LCxFoOSBL0W4J4NoRVR3qhnEeK56XkLkDBnhh6QvoOr0IRgzs3xBhH8qEnM3DkNsdgECFZy3oMiMS/uKVCFvYaXvgjU6UdYoqHyX1uPSerwKX2LsZAh6jkrPV2grAcq772PApKT3GzKsR6WW9Rk2ITkr+z3JvCIoq0dFeav/Craeh4Tp9pw6BDuW6Xb4BBCnyA7upkDl77HFWDEzy3QeXY3RCJT/0LvhTXKWV0kv4a3XcCbU5vudCEHMMrl/NwXqJqnyWihQeylQ5YeoVU14M8Xja8wJ/XuXWkBWUfq27UZmlugh2LPO/4VYXQnTZm6va7sFZnTbjscj4a2cPP+Jfkyb+soaw24zg6xz8BZ0Im/yRc9EM+xNQUJCMGL5ffFbSglQdWmRsB9lY5OWc1+yDHNWXZUbBaq1GifOr7Hr9zqSsyL6E1DWdYzwcGAlz7VGWbsG4Vd1RRKgtsdWkDw80BuuRlmBqq5OAlR4rAdetazv3e6nR95OaQVhT30St11tQ0YZ2nda/J9ccLUbluzAO+rjMlp7lMRIItCMNalbhuH3EOYNB5yLe+CLw/xV7+NmV93xmMRH54uAq80ytwhFCxKj/jSegRGQM1wNfAJWm9lc6uvrJkPetj8XkWjGlpC/7oRgfaoiwi4OfDgew0leoc+AANWy8iREEmIau4ejCDd47qNbCFCD2wKqC/A7A6ywy0LM+HXotwvu5uWPab0LBIdZcX7NjGCcwabO98IUkoxANeZ8DSRcP4xWAlRgkmkf7v/oU2KoqFeCrJStNskCWbryEmtE6pgFLUk6jleTJ356ZPBKAlRcfp8ruq1uxTFSeRKgGn0JUCOxqu78bIDpn4TeYxIcbQZZ5dq6G+G4VwSvknQaS2Kna00KLNfMlSnFFCj/d6CV8tbV3aJBoBoeoECVr7MR4e3gmj500ZksJcnOzIxWEH+MlpEysnidP+aQSfgenov+LDOacZ7PWjPmrLK3I9CiRDN+Nja3yzCl7bfGn5C30WTSSFoFcHX5uxHs70LKSEMuAmUZiPgsCFDXo7ssm8hSdV0ClFVvi6QtCRpceUVrpwvmrN4TaU33HpRWa90Ddfia7Yb1CFTygKmMmHGgqs0JoAwDuBLy9YUb/fR4h6oththCa87F3Au+HCfrerT67sZvS3C99wC5I9G5Ffa/cnq80/rQjPVuKet2IVBFS0sIUAWdjSUJBbhXGt6UxIl8CqbMsqySiARip/57seRlXeRDq/0Yt0Ddniwlwx1eL8f1gEng5BF4LoJgG7LeLt1tlQzDGP7oWpdHBFsOS1VkohUojdq+RRZiBW9AECHmT8PQGEOAMiUl4h1F69+k5iyUVbvuTNRiRRbd5bypSSbYCo5N2c5dxCnUQ8eomXiLa9uZIKt9RUJ9/EnOOiU569GM64PaFmBK06WH+mQ3YfFlyhmwKNl7GtmsMpLU9m5P+joBVFumJxLjr62JIUDl11QgUJaBrUOeMpA1AplWOIjfOei1ckURMwuyWygM+9HVZJX9z8bv8UX1gQvLKG/uNaU4l1mrn6dE6hSLbUQLqNA6TDayhPy9aMb2FN0510OPxCx4G+aTMnLRc/B5xSFQWQraPvUEb0snReFwPB8pWWaYYLsMQy/B0XhKVpaTeud0rvtof2TwkKN9n5+k/BY045ju4MAmClQuUeq650mytNl5adUUqNgDRFbQlWQ6nISOY0LLyIHCNFpGaveQEijOJmucACp2QQ9xCpUz7mFNaat7LpHlegLFNM641Zsfp0BtiirDrKOJabRCCwEqaPEuckdinU2MKOsaZEYhUPqWqkcT5eiJi3w/QSY4QBn55MuQnUyA+v8tRiWasRVC3RCo9I4HY3QEqCUpxCkq89bEKYkZL15OeEt8GmwxhqNgy6zsKWv7dghQOxSb4/DqWt9zEIObz9i4ZilJSgN5yyhQK21Si0lXnWnY1IS8LfOtaJ/B9hHWRA+RMpLrm3OKiRnva7MGuaNSFbtCToDK6VBD6ELce6+FCzzQzRR7AK8WVRny/fSPCL40LZ+FgjxNnpuRqZYhUKq8m0LKyJ37PbCMrB/YQ7zaJT0gfjfG4KphwJU3b6hIajUqWWfPfXvV/34LpB4IfA1aCVB/Cq1BF5VV7nxiEzxNWRTyilCg1kZZodSMQHX8G3q1ckPiz/Mdt5LgfjStskzSH03A7x+oov3R/tgYbJ+MWsX3QYrC3L1BCdj/pd4bUIuy1Kaa+bRD/Ysr8CZoSceSVVhIGblnewu6bXW3FpOSvueUGAbIXml29oojBY1vI6l3jCYfylt/6E6o8/9Lkr7GcgMByqdRTdxW21dNclZxBi0jK7rKiKxybRJxitTwUEhKbJa7GsKNMHFTWErSeF5J4x9PgboemfFO9EevCAXqv2tsQnkzReBr9C1bXhFcWtnYJCq8CG/X8CpJDjSxbniiivRHld1tqYSYjYu9k7HK/O+/pqhRVtYhORYjgbJ6zsTCgzo042/nKbKFUYn+93ZakiQJEmZ5bl4Qum3Y2u5W7I9kfqfhGC0gZWSv7+YEApQiPAarzJ4Aw9IpIDnLCq6VmGI6h3GQJEkSfCgtvSabeJL2yWQiQGWdA9MKC+7mZaYOzFm6fSZTDO7/uDQTAaq+2ZSfTngzncwHVJkTuO34KFp7SH80FLE7jPRHecNB3HbF1o1QZSpnPW1PKcoa3Kn4duTYTQ+EevkxyArJ/BA3O+tQuF7h6qXA1WbzYFSNG1aZ7auei3LIWcr6kIdW4Wrrd8fX2UWGvG18CC1MWZRY7N+DT/tTXomdK6ytX8qIlpGl2wo7CTGZNU6Y8SvSH2fGQv5vmTEaLFsL46kZ2+LBzVlmLOQXNtZOd0QagDtJSH9khcx9pD8KMPQSM04JPQ+4h3X76lQEKM/CLg9MaUUNGasqNXhHn7Z6CgkJaQYxfNs+bXw16Y9slFRBeKs4RrSMHAFV3/VA+74dNonyoECtaVWbYRr+O7NkmYsgdrIzU+prC7tbCFAND2HOkhXN3xZOktL16KrDfW12Wx1Bgdp0rxfhzXtNUpz+fqe7R31lzZrdMmIFC2l/tPS3KZ4y3MP7fRQoq2foMcKbfDj+3hZqGaa0v1kjVcZ/duqQpjK+KTW0jOxR5cTp8I71VqD9UcwhWeBNgOrt2kVkbe5LIUBl/7NNrkcYC8ZOhnQlVWtSgxNA+QxYsOu2RWExcdt9vYYYYsZpPrl4Vd5c6JWOskJ6DbUuLEgFVacP6WiiwTB8WtB+CtSujI2kP8oOLsGl1aQ2/PMilJUe5+xFZAVqM7IKmAWRNLthzy9u8J1/wQcqLeURVX6kP+rbWqnE3wU6HqxtQt42PbAZq0yNwvcYtTOz4G+2IQnK92N/tIlawb83E2LWPjZEy0if92S+DoFqfj0q2vGt1+PxspuiYb7fOPtDEtQEF010QE4FISYoI5wQUx5lIkBVFhoG0IyLqrZu99Rgfk2yRqcLc6ygJs3JmG57JHlHHSkjkyvch6LxPCSzjgA1WBxPgKp33VoWLUOgAqKWuzALckFbmrPx+XrPp/h2CFAhbwEFqtZ9I2mf3D6DvU44xeNe1Egyotz0zL/+szSn44r6E8hJf/R0BP0IhJhhOBFrzYy/rfxzJAJl2fFsuHpi0nVbF7DbPOtc0JfmfNjT/SX0RxFbiNt2HpIyWkaauoYjmeSsqIYsYsbbzoG3C/Nc/UopSYKG4CCTL4sNp2VkQJs36Y/ScmgZuTmW/i4wP8D9oAtzwmJp7oY9YTzzbycpnLRP1dooTKD60qqFBKgNv39POkj7FBngnFXALJgLgjTX43k9f4EraZ+yfDNo+1T8q5uCZaR8/jPRnM7Ywx2iY1TJLLgKnqV5Me6mOYMNNv4KmxzEKlN9StxDmkj7tOR8tePV6zEM25dr5tWv5pIkCR5/yboRcNZ6u6D1FxYemAQEassxetKox246VFvr8sv/m5f/fZjKxwjyUxK/nJSRH8dKfJq5yBbOZUYCVO/RGJxG/g8PS/N0fJBwFG8jOesRqFUvwnwK1KNetIBKeo/u5DyTt4eleT5mUHIg+pdfM6sD9tP+yOP5cK1EM74db7I4pdnNRP8o3TPj4RnEoxifxKlrhxyf1p/0WSBQkzldzvgQ4zMJ0j06LqQ2nuGs/4YJjvakEymau2wqRpHO5Oj437Ap1OZaqAQ=" alt="circles" /></span>
			<span className="gymFeaturesCircles"><img src="data:image/webp;base64,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" alt="circles" /></span>
			<span className="gymFeaturesCircles"><img src="data:image/webp;base64,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" alt="circles" /></span>
			<h2 className="sectionHeaders">ویژگی های باشگاه</h2>
			<div className="gymFeatures">
				{gymFeatures.map(gymFeature => <GymFeature images={gymFeature.images} modalDescription={gymFeature.modalDescription} iconSrc={gymFeature.iconSrc} title={gymFeature.title} description={gymFeature.description} btnText={gymFeature.btnText} content={gymFeature.content} />)}
			</div>
		</>
	);
};

export default GymFeatures;