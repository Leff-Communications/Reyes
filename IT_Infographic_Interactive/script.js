var videoThumbnails = document.querySelectorAll('.col-3 div');

                videoThumbnails.forEach(function(thumbnail) {
                    thumbnail.addEventListener('click', function() {
                        const videoSrc = this.getAttribute('data-video-src');
                        const videoFrame = document.getElementById('video-frame');
                        videoFrame.src = videoSrc;
                        document.querySelectorAll('.video-thumbnail').forEach(col => {
                            col.classList.remove('column-active');
                        
                    });
                        this.classList.add('column-active');
                });
                });




document.querySelectorAll('.slide-selection h2').forEach(h2 => {
                    h2.addEventListener('click', () => {
                        const targetId = h2.id + '-carousel';
                        document.querySelectorAll('.col-4').forEach(col => {
                            col.classList.remove('active');
                            if (col.id === targetId) {
                                col.classList.add('active');
                            }
                        });
                        document.querySelectorAll('.slide-selection h2').forEach(h => {
                            h.classList.remove('active');
                        });
                        h2.classList.add('active');
                    });
                });
                // Add click event to each image in the carousel
                document.querySelectorAll('.col-4>div').forEach(div => {
                    div.addEventListener('click', () => {
                        const img = div.querySelector('img');
                        if (img) {
                            const fullImage = document.createElement('img');
                            fullImage.src = img.src;
                            fullImage.style.height = '100%';
                            fullImage.style.borderRadius = '20px';
                            fullImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            fullImage.style.objectFit = 'contain';
                            
                            const modal = document.createElement('div');
                            modal.style.position = 'fixed';
                            modal.style.top = '0';
                            modal.style.left = '0';
                            modal.style.width = '100%';
                            modal.style.height = '100%';
                            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                            modal.style.display = 'flex';
                            modal.style.justifyContent = 'center';
                            modal.style.alignItems = 'center';
                            
                            modal.appendChild(fullImage);
                            
                            document.body.appendChild(modal);
                            
                            modal.addEventListener('click', () => {
                                document.body.removeChild(modal);
                            });
                            fullImage.addEventListener('click', (e) => {
                                document.body.removeChild(modal);
                            });
                            //add left and right arrows to navigate through images
                            const leftArrow = document.createElement('div');
                            leftArrow.innerHTML = '&lt;';
                            leftArrow.style.position = 'absolute'; 
                            leftArrow.style.top = '50%';
                            leftArrow.style.left = '20px';
                            leftArrow.style.transform = 'translateY(-50%)';
                            leftArrow.style.color = 'white';
                            leftArrow.style.fontSize = '2em';
                            leftArrow.style.cursor = 'pointer';
                            modal.appendChild(leftArrow);
                            const rightArrow = document.createElement('div');

                            rightArrow.innerHTML = '&gt;';
                            rightArrow.style.position = 'absolute';
                            rightArrow.style.top = '50%';
                            rightArrow.style.right = '20px';
                            rightArrow.style.transform = 'translateY(-50%)';
                            rightArrow.style.color = 'white';
                            rightArrow.style.fontSize = '2em';
                            rightArrow.style.cursor = 'pointer';
                            modal.appendChild(rightArrow);

                            const images = Array.from(document.querySelectorAll('.col-4>div img')).map(img => img.src);
                            let currentIndex = images.indexOf(img.src);
                            leftArrow.addEventListener('click', (e) => {
                                e.stopPropagation();
                                currentIndex = (currentIndex - 1 + images.length) % images.length;
                                fullImage.src = images[currentIndex];
                            });
                            rightArrow.addEventListener('click', (e) => {
                                e.stopPropagation();
                                currentIndex = (currentIndex + 1) % images.length;
                                fullImage.src = images[currentIndex];
                            });

                        }
                    });
                });

                
                // Set the first h2 as active by default
                document.querySelector('.slide-selection h2').classList.add('active');
                // Set the first carousel as active by default
                document.querySelector('.col-4').classList.add('active');
                // Set the first video thumbnail as active by default
                document.querySelector('.col-3 div').classList.add('column-active');
                // Set the first video in the iframe by default
                const firstVideoSrc = document.querySelector('.col-3 div').getAttribute('data-video-src');
                document.getElementById('video-frame').src = firstVideoSrc;
