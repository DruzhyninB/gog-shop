
import assasins from './assasins_creed.png'
import deponia from './deponia.png'
import neverwinter from './neverwinter.png'
import oddworld from './oddworld.png'
import settlers from './settlers.png'
import witcher_cover from './witcher_cover.png'
import cart_icon from './cart-icon.png'
export class ImageProviderClass {
    private static instance: ImageProviderClass;
    private imagePool: {}
    constructor() {
        this.imagePool = {
            assasins,
            deponia,
            neverwinter,
            oddworld,
            settlers,
            banner: witcher_cover,
            cart: cart_icon
        }
    }

    public static init(): ImageProviderClass {
        if (!ImageProviderClass.instance) {
            ImageProviderClass.instance = new ImageProviderClass();
        }
        return ImageProviderClass.instance;
    }

    public get(id: string) {
        return this.imagePool[id] || null;
    }
}

let instance = ImageProviderClass.init();

export default instance;
