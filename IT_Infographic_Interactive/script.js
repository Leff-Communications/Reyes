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
                            fullImage.style.width = '100%';
                            fullImage.style.height = 'auto';
                            fullImage.style.borderRadius = '20px';
                            fullImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            
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
                        }
                    });
                });

                
                // Set the first h2 as active by default
                document.querySelector('.slide-selection h2').classList.add('active');
                // Set the first carousel as active by default
                document.querySelector('.col-4').classList.add('active');
