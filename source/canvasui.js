/**
 * MIT license source code.
 *
 * canvasui.js
 * Created by Xiaole Tao (http://xiaole.happylive.org)
 * Last update - 2012/10/13.
 *
 * File for 99 point project only.
 */
(function() {
	if (window.Poker) {
		/**
		 * ## Draw label
		 *
		 * canvas.drawLabel ([x, y[, text[, bLight[, nPosition]]]])
		 *
		 * * x, y      - The x, y coordinate of top left corner of the label in canvas. Default value is 0, 0.
		 * * text      - The text in label. Default value is 'Hello!'.
		 * * bLight    - Is the background light color or dark color. Default is boolean false.
		 * * nPosition - Position of the arrow of label. The value should be one of the value list:
		 *               [1,2,3,4,5,6]
		 *               1=>left-up       2=>mid-up       3=>right-up
		 *               4=>left-bottom   5=>mid-bottom   6=>right-bottom
		 *               Default value is 1.
		 *
		 * Example:
		 *
		 * * canvas.drawLabel (10, 10, 'xiaole tao', true, 4);
		 */
		CanvasRenderingContext2D.prototype.drawLabel = function(x, y, text, bLight, nPosition) {
			var x1, fillLinGrad, colorPack, labelHeight = 15, labelWidth;

			x = x || 0;
			y = y || 0;
			text = text || 'Hello!';
			if (!nPosition || !nPosition.toString().match(/[123456]/)) {
				nPosition = 1;
			}

			if (bLight) {
				colorPack = ['#f9bf12', '#f7aa0f', '#f3800a'];
			} else {
				colorPack = ['#dfd4b0', '#cdbc84', '#b39a5c'];
			}
			labelWidth = text.length * 7 + 18;
			this.strokeStyle = 'rgba(10,10,10,0.6)';
			this.strokeRoundRect(x + 2, y + 2, labelWidth, labelHeight, 3);
			this.strokeStyle = colorPack[0];
			this.strokeRoundRect(x, y, labelWidth, labelHeight, 3);
			fillLinGrad = this.createLinearGradient(x + 1, y + 1, x + 1, y + 1 + labelHeight);
			fillLinGrad.addColorStop(0, colorPack[1]);
			fillLinGrad.addColorStop(1, colorPack[2]);
			this.fillStyle = fillLinGrad;
			this.fillRoundRect(x + 1, y + 1, labelWidth, labelHeight, 3);
			this.font = "12px Consolas";
			this.fillStyle = 'rgba(255,255,255,0.6)';
			this.fillText(text, x + 10, y + 12);
			this.fillStyle = '#222';
			this.fillText(text, x + 10, y + 13);

			if (nPosition == 4 || nPosition == 5 || nPosition == 6) {
				x1 = (nPosition == 4) ? x + 15 : (nPosition == 5) ? x + labelWidth / 2 - 3 : x + labelWidth - 18;
				fillStyle = 'rgba(255,255,255,0.4)';
				this.beginPath();
				this.moveTo(x1, y + 16);
				this.lineTo(x1 + 3, y + 21);
				this.lineTo(x1 + 6, y + 16);
				this.closePath();
				this.fill();
				this.fillStyle = colorPack[2];
				this.beginPath();
				this.moveTo(x1, y + 16);
				this.lineTo(x1 + 3, y + 20);
				this.lineTo(x1 + 6, y + 16);
				this.closePath();
				this.fill();
			} else {
				x1 = (nPosition == 1) ? x + 15 : (nPosition == 2) ? x + labelWidth / 2 - 3 : x + labelWidth - 18;
				this.fillStyle = colorPack[1];
				this.beginPath();
				this.moveTo(x1, y + 1);
				this.lineTo(x1 + 3, y - 3);
				this.lineTo(x1 + 6, y + 1);
				this.closePath();
				this.fill();
			}
		};
	}
})();
