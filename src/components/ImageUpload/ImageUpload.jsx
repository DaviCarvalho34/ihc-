import './imageUpload.scss';

export const ImageUpload = () => {
    return(
        <div className="ImageUpload">
            <div>
                <input type="file" className="inputfile" name="" id="file" />
                <label for="file">Arquivo</label>
            </div>
            <div>
                <input type="file" className="inputfile" name="" id="file" />
                <label for="file">Arquivo</label>
            </div>
            <div>
                <input type="file" className="inputfile" name="" id="file" />
                <label for="file">Arquivo</label>
            </div>
           
            
        </div>
    );
}