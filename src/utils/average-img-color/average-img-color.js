/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @param {HTMLImageElement}img una imagen del dom, de ella se obtendrá su color promedio
 * @param {number} brightness Que tanto brillo debe de tener el resultado del color
 * @param {()=>void} onerror
 * @returns {['rgb(0-255,0-255,0-255)', {red,green,blue}]}
 * @example
 * 	const [colorString, colorObject] = getIMGAverageColor(img, 1);
 */
export const getIMGAverageColor = (img, brightness = 1, onerror = () => {}) => {
	// Se crea un canvas para poder acceder a los pixeles
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	let data;
	canvas.width = img.width;
	canvas.height = img.height;

	// Bloque try catch para evitar errores de acceso a los pixeles
	try {
		// Se dibuja la imagen en el canvas con posiciones x=0, y=0
		if (!ctx) {
			onerror?.(new Error('Could not get 2d context'));
			return ['', {}];
		}
		ctx.drawImage(img, 0, 0);

		// Se obtienen los datos de la imagen
		const imageData = ctx.getImageData(0, 0, img.width, img.height);
		data = imageData.data;
	} catch (error) {
		onerror?.(error);
		return ['', {}];
	}

	// Aquí se almacenarán los colores del lienzo
	let red = 0;
	let green = 0;
	let blue = 0;

	// Se recorre el lienzo para obtener los colores
	// y sumarlos a sus correspondientes
	for (let i = 0; i < data.length; i += 4) {
		red += data[i];
		green += data[i + 1];
		blue += data[i + 2];
	}

	// Se calculan los promedios dividiento cada cantidad de
	// Rojo, verde y azul entre la cantidad total de pixeled
	// Tambien se multiplica por el brillo que se quiere que tenga el color
	const numberOfPixels = canvas.width * canvas.height;
	const dataBrightness = parseFloat(
		img.getAttribute('average-brightness') || ''
	);
	brightness = dataBrightness || brightness;
	red = (red / numberOfPixels) * brightness;
	green = (green / numberOfPixels) * brightness;
	blue = (blue / numberOfPixels) * brightness;

	// Se limita el valor minimo a 0 para los colores
	const average = {
		red: red < 0 ? 0 : red,
		green: green < 0 ? 0 : green,
		blue: blue < 0 ? 0 : blue,
	};

	// Se devuelve el color promedio como un string y como objeto
	const rgb = `rgb(${average.red}, ${average.green}, ${average.blue})`;
	return [rgb, average];
};
