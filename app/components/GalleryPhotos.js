import '../../styles/gallery.css';

/*
LEGEND:

- gallery-photos: container for all photos, grid layout

THIN CONTAINER:
- photo-rectangle-thin: thin photo container
- thin-empty-l: large empty space in the thin container
- thin-filled-l: large filled space in the thin container
- thin-hor-bar: horizontal bar in the thin container
- thin-filled-vs: very small image space in the thin container
- thin-filled-m: medium image space in the thin container

WIDE CONTAINER:
- photo-rectangle-wide: wide photo container
- wide-hor-bar: horizontal bar in the wide container
- wide-filled-vs: very small image space in the wide container
- wide-empty-vs: very small empty space in the wide container
- wide-filled-l: large image space in the wide container
- wide-hor-square: horizontal square in the wide container
- wide-filled-m: medium image space in the wide container

Apply the classes to the appropriate elements to create the gallery layout you want.
*/

export default function GalleryPhotos() {
  return (
    <>
      <div className='gallery-photos'>
        
        <div className='photo-rectangle-thin'>
          <div className='thin-empty-l'></div>
          <div className='thin-filled-l'>
            <img src='https://via.placeholder.com/230x500' alt='placeholder' />
          </div>
        </div>

        <div className='photo-rectangle-wide'>

          <div className='wide-hor-bar'>
            <div className='wide-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
            <div className='wide-empty-vs'></div>
            <div className='wide-empty-vs'></div>
            <div className='wide-empty-vs'></div>
          </div>

          <div className="wide-filled-l">
            <img src='https://via.placeholder.com/600x500' alt='placeholder' />
          </div>

          <div className='wide-hor-bar'>
            <div className='wide-empty-vs'></div>
            <div className='wide-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
            <div className='wide-filled-m'>
              <img src='https://via.placeholder.com/250' alt='placeholder' />
            </div>
            <div className='wide-filled-m'></div>
            <div className='wide-empty-vs'></div>
          </div>
        </div>

        <div className='photo-rectangle-wide'>

          <div className='wide-hor-square'>
            <div className='wide-empty-vs'></div>
            <div className='wide-filled-l'>
              <img src='https://via.placeholder.com/500x900' alt='placeholder' />
            </div>
            <div className="wide-filled-l">
              <img src='https://via.placeholder.com/500x900' alt='placeholder' />
            </div>
          </div>

          <div className='wide-hor-square'>
            <div className='wide-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
            <div className='wide-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
          </div>

          <div className='wide-filled-l'>
            <img src='https://via.placeholder.com/600x500' alt='placeholder' />
          </div>
        </div>

        <div className='photo-rectangle-thin'>

          <div className='thin-filled-l'>
            <img src='https://via.placeholder.com/400x600' alt='placeholder' />
          </div>

          <div className='thin-hor-bar'>
            <div className='thin-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
            <div className='thin-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
          </div>

          <div className='thin-filled-m'>
            <img src='https://via.placeholder.com/400x400' alt='placeholder' />
          </div>
        </div>

        <div className='photo-rectangle-wide'>

          <div className='wide-hor-square'>
            <div className='wide-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
            <div className='wide-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
            <div className='wide-filled-vs'>
              <img src='https://via.placeholder.com/150' alt='placeholder' />
            </div>
          </div>

          <div className='wide-hor-square'>
            <div className='wide-empty-vs'></div>
            <div className='wide-empty-vs'></div>
            <div className="wide-filled-l">
              <img src='https://via.placeholder.com/500x900' alt='placeholder' />
            </div>
            <div className='wide-empty-vs'></div>
          </div>

          <div className='wide-filled-l'>
            <img src='https://via.placeholder.com/600x800' alt='placeholder' />
          </div>
        </div>
      </div>
    </>
  );
}